```mermaid

sequenceDiagram
    participant browser
    participant server

    Note right of browser: Käyttäjä kirjoittaa uuden muistiinpanon ja painaa tallenna

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note right of server: Palvelin vastaanottaa muistiinpanon datan
    server-->>browser: HTTP redirect (status 302) to notes
    deactivate server

    Note right of browser: Selain tekee uudelleenohjauksen notes-sivulle

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: JavaScript hakee muistiinpanot JSON-muodossa

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: päivitetty lista muistiinpanoista JSON-muodossa
    deactivate server

    Note right of browser: Selain renderöi päivitetyn listan muistiinpanoista

