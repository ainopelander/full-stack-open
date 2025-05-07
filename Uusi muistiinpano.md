```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: Käyttäjä kirjoittaa muistiinpanon ja painaa tallenna

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note right of server: Palvelin vastaanottaa uuden muistiinpanon JSON-datana
    server-->>browser: HTTP 201 Created 
    deactivate server

    Note right of browser: Selain lisää uuden muistiinpanon suoraan näkymään

```
