// set the dimensions and margins of the diagram
    const margin = {top: 20, right: 20, bottom: 10, left: 20},
      width  = 760 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // declares a tree layout and assigns the size
    const treemap = d3.tree().size([width, height]);

    // append the svg object to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select("#xml-tree")
            .attr("width", width + margin.left + margin.right   )
            .attr("height", height + margin.top + margin.bottom +300),
          g = svg.append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");


    const box_height =  30;
    const box_width  = 180;
    const attribute_height = 16;
    
    
    //return attributes.map(a => a.localName + ": " + a.value).join(",")
    
    function total_box_height(d) {
        let attribute_count = d.data.attributes.length;
        return attribute_count == 0 ? box_height
                                    : 50 + attribute_height * (attribute_count -1) + 7;
    }
  
    function total_box_width(d) {
        maxlen = d.data.tagName.length
        nnm = d.data.attributes;
        for (let i = 0; i < nnm.length; i++) { 
            maxlen = Math.max(maxlen, printAttribute(nnm[i]).length) 
        }
        char_width = 11; //estimated
        return 5 + maxlen * char_width + 5;
      }
  
    function isLeaf(d) {
      return d.data.children.length == 0;
    }


    printAttribute = d => `${d.nodeName}: ${d.value}`

    const textArea = document.getElementById("xml-tree-input-textarea");

    // color textarea red in case of parse error
    function updateTextAreaBackground(parseError) {
      const PARSE_ERROR_CLASS = 'xml-tree-input-textarea-parse-error';
      classes = textArea.classList;
      if (parseError) {
        if (!classes.contains(PARSE_ERROR_CLASS)) {
          classes.add(PARSE_ERROR_CLASS);
        }
      } else {
        if (classes.contains(PARSE_ERROR_CLASS)) {
          classes.remove(PARSE_ERROR_CLASS);
        }
      }
    } 

    function popup2() {
      
      const xmlAsText = textArea.value;
      parser = new DOMParser();
      treeDataXml = parser.parseFromString(xmlAsText, "text/xml");        
      const errorNode = treeDataXml.querySelector('parsererror');
      updateTextAreaBackground(errorNode)
      //skip rendering if xml cannot be parsed
      if (errorNode) {
        return;
      }
    
      //  assigns the data to a hierarchy using parent-child relationships
      let hierarchy = d3.hierarchy(treeDataXml.children[0], d => d.children);
      
      // maps the node data to the tree layout
      nodesData = treemap(hierarchy);

      // adds each node as a group
      var groups = g.selectAll("g")
          .data(nodesData.descendants());
      groupsEnter = groups.enter()
          .append("g")
      groupsEnter.append("rect")
      groupsEnter.append("circle")
      let textEnter=  groupsEnter.append("text").attr("class", "nodeText")//chain nests -> unchain

      let groupsCombined = groups.merge(groupsEnter);
      groupsCombined
         .attr("transform", d => "translate(" + (d.x) + "," + d.y + ")")
         .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
         ;

      groupsCombined.select("rect")
         .attr("width",  d => total_box_width(d))
         //.attr("width",  box_width)
         .attr("height", total_box_height)
         .attr("transform", d => `translate(-${total_box_width(d)/2},0)`)
         .attr("class", "node")
         .attr("rx", 5)
         ;

      //groupsCombined.select("circle")
      //  .attr("r", 4)
      //  .style("stroke", d => d.data.type)
      //  .style("fill", "black")
      //  ;

      let textCombined = groupsCombined.select("text.nodeText")
        .attr("dy", ".35em")
        .attr("x", d => 5 - total_box_width(d)/2)
        .attr("y", 15)
        .style("text-anchor", "start")
        .text(d => d.data.tagName)
        ;

      function getAttributesEnriched(d) {
            nnm = d.data.attributes;
            attributes = []
            for (let i = 0; i < nnm.length; i++) { 
              attributes.push({d:d, attribute:nnm[i]}) 
            }
            return attributes
      }  
        
      textCombined.selectAll('tspan').data(d => getAttributesEnriched(d))
        .enter()
        .append("tspan")
        .text(de => printAttribute(de.attribute))
        .attr("x", de => 5 - total_box_width(de.d)/2)
        .attr("y", (_d, i) => 50 + attribute_height * i);
        ;

                  
      let leaves = groupsCombined.filter(isLeaf);
      const leave_distance = 120;
      const leave_ry = 25;
      leaves
        //.append("circle")
        //.attr("r",  50 )
        .append("ellipse")
        .attr("rx",  50 )
        .attr("ry",  leave_ry )
        .attr("transform", d => `translate(0,${leave_distance})`)
        .attr("class", "value")
        ;
      leaves.append("text")
        .attr("x", -25)
        .attr("y",   5)
        .style("text-anchor", "start")
        .text(d => d.data.textContent)
        .attr("fill", "red")
        .attr("transform", `translate(0,${leave_distance})`)
        ;
      leaves.append("line")
        .attr("y1", d => total_box_height(d))
        .attr("y2", d =>  leave_distance - leave_ry)
        .attr("stroke", "black")
        .attr("stroke-width", "2px")
        ;
      leaves.exit().remove();
      groups.exit().remove();


      // adds the links between the nodes
      var links = g.selectAll(".link")
                   .data( nodesData.descendants().slice(1));
      var linksEnter = links.enter().append("line");
      var linksCombined = links.merge(linksEnter);
      linksCombined
        .attr("class", "link")
        .attr("x1", d => d.parent.x)
        .attr("y1", d => d.parent.y + total_box_height(d.parent))
        .attr("x2", d => d.x)
        .attr("y2", d => d.y);
      links.exit().remove();


}

popup2()
