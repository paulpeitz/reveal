<!-- .slide: data-background-image="./img/chain.jpg" data-background-opacity=0.2 -->

# Identity and Access Management (IAM)<!-- .element: class="r-fit-text"  -->

--

# Agenda

* Identity & Access Management (IAM)
* Grundlagen: Authentifizierung vs. Autorisierung
* Authentifizierung (1): Passwörter und ihre Schwächen
* Authentifizierung (2): 2-Faktor-Authentifizierung (2FA)
* Authentifizierung (3): FIDO2
* Passkeys statt Passwörter
* Autorisierung (1): Berechtigungsmanagement
* Autorisierung (2): Single Sign-On (SSO)

--

# Identity & Access Management (IAM)

<p style="text-align: left; font-size: 1.2em;">
IAM ist das Framework aus Richtlinien, Prozessen und Technologien, das sicherstellt, dass die richtigen Entitäten (Benutzer oder Systeme) den richtigen Zugriff auf die richtigen Ressourcen (Daten, Anwendungen) zur richtigen Zeit und aus den richtigen Gründen erhalten.
</p>

--

## Grundlagen: Authentifizierung vs. Autorisierung

* Authentifizierung (AuthN): Wer sind Sie?
  * Der Prozess der Überprüfung einer Identität.
  * Der Benutzer beweist, dass er derjenige ist, für den er sich ausgibt.
  * Analogie: Das Vorzeigen Ihres Personalausweises an der Tür.

* Autorisierung (AuthZ): Was dürfen Sie tun?
  * Der Prozess der Gewährung oder Verweigerung von Rechten.
  * Dieser Schritt erfolgt nach einer erfolgreichen Authentifizierung.
  * Definiert, auf welche Ressourcen (Dateien, API-Endpunkte, Admin-Dashboards) der authentifizierte Benutzer zugreifen darf.
  * Analogie: Nachdem Sie an der Tür identifiziert wurden, gibt Ihnen die "Hausordnung" (Autorisierung) das Recht, das Wohnzimmer zu betreten, aber nicht das Schlafzimmer.


--

# Authentifizierung<!-- .element: class="r-fit-text"  -->

## Wer sind Sie?<!-- .element: class="r-fit-text"  -->



--

## Grundlagen der Authentifizierung

* Die drei Faktoren der Authentifizierung:
 * Wissen: Etwas, das Sie wissen (Passwort, PIN).
 * Besitz: Etwas, das Sie haben (Smartphone, USB-Token, Smartcard).
 * Sein (Inhärenz): Etwas, das Sie sind (Fingerabdruck, Gesichtsscan, Iris).

--

## Wissen - Passwörter

* Passwörter sind der "klassische" Authentifizierungsfaktor: Wissen
* Das Passwort ist ein Single Point of Failure, der auf Geheimhaltung basiert. 
* Sobald dieses Geheimnis – sei es durch Raten, Phishing oder Leaks – preisgegeben wird, ist die Authentifizierung gebrochen.

--

## Passwörter - Menschliche Schwächen 1

* Geringe Entropie (Schwache Passwörter)
  * Menschen neigen dazu, sich Passwörter auszudenken, die leicht zu merken sind:
    * Gängige Wörter ("Passwort", "Sonne")
    * Sequenzen ("123456", "qwertz")
    * Persönliche Daten (Geburtstage, Namen von Kindern oder Haustieren)
    * Keine/Wenige Sonderzeichen

* Passwort-Wiederverwendung (Password Reuse)
  * Benutzer verwenden dasselbe (oft schwache) Passwort für Dutzende verschiedene Dienste. 
  * Wird nur ein dieser Dienste kompromittiert, können Angreifer diese Anmeldedaten bei vielen anderen Diensten ausprobieren ("Credential Stuffing").

--
## Temp 

<div class="left">

- Konzept
- Sprachen
- Tools
- Vor- und Nachteile

</div>
  
<div class="right-text r-fit-text">  
Cloud-native Computing ist ein Ansatz in der Softwareentwicklung, der Cloud Computing nutzt, um skalierbare Anwendungen in Cloud Infrastrukturen, Plattformen und Umgebungen zu erstellen und auszuführen. Gemäß der Cloud Native Computing Foundation (CNCF) prägen diesen Remote-Computing-Ansatz insbesondere Technologien wie Container, Microservices sowie serverlose Funktionen und unveränderliche Infrastrukturen (Immutable Infrastructures und Infrastructure as Code), die zumeist über deklarativen Code bereitgestellt werden.
</div>

--

<!-- .slide: data-background-image="./img/ui2.jpg" -->

## UX und Prototypting
 
--

<!-- .slide: data-background-image="./img/iot.jpg" -->

## Internet of Things und Edge Computing

<p style="text-align: left;" class="r-fit-text">
Das Internet of Things (IoT) erzeugt große Datenmengen, die verarbeitet und analysiert werden müssen, um sie nutzbar zu machen. Edge Computing rückt die  Rechenkapazitäten näher an den Endbenutzer oder die Datenquelle heran, z. B. ein IoT-Gerät.<br>
Auf diese Weise können die IoT-Daten direkt am Netzwerkrand, dem sogenannten „Edge“, an dem sich das Gerät befindet, erfasst und verarbeitet werden, ohne dass die Daten erst an ein Rechenzentrum oder eine Cloud gesendet werden. So können Maßnahmen wie die Erkennung von Anomalien für die prädiktive Wartung schneller eingeleitet werden. <br>
Die Fähigkeit von IoT-Geräten, Rechenleistung zur Analyse von Echtzeitdaten zu nutzen, wird immer wertvoller. 
</p>

--

<!-- .slide: data-background-image="./img/chain.jpg"  -->

## Blockchain

- Technologie der Blockchain
- Bitcoinm, Etherum und der Rest
- PoW vs. PoS
- Smart Contracts
- (sinnvolle) Anwendungsfälle

--

<!-- .slide: data-background-image="./img/test1.jpg" -->

## Test Driven Development

- Erst die Tests, dann der eigentliche Code...
- Beschreibung des Ansatzes, mit Vor- und Nachteilen.
- Konzept des "Shift Left Testings"

--

<!-- .slide: data-background-image="./img/robot.jpg" -->

## Low Code / No Code

Low Code und No Code sind Entwicklungs-Ansätze in der IT, die mit wenigen beziehungsweise vollständig ohne Programmierkenntnisse auskommen.

Während Low Code mit einem geringen Programmieraufwand auskommt, verzichten No Code Plattformen gänzlich auf Programmierarbeit des Anwenders. Beide Technologien tragen dazu bei, dass zahlreiche Anwendungsgebiete in der Digitalisierung keiner manuellen Programmierung mehr bedürfen.

--

<!-- .slide: data-background-image="./img/sourcecode2.jpg" -->

## Code Qualität

 * Definition "Guter Code, schlechter Code"
 * Code Smells, Refactoring
 * Clean Code als Grundlage
 * Vorgehen statischer Codecheck (automatisch, Code Review)
 * Tools für Codecheck

--

<!-- .slide: data-background-image="./img/github.jpg" -->

## GitHub

github als Plattform zur Quellcodeverwaltung und darüber hinaus...

 - Repositories, Issues, Actions
 - github Pages
 - GitHub Codespace und Copilot
  - CI/CD und Automation
