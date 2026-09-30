# Trainingstagebuch Rettungshundearbeit

![Trainingstagebuch Fläche / Trümmer](icon-192.png)

Version 2.9.2 · Training, Prüfung und Einsatzvorbereitung für Fläche, Trümmer und ergänzendes Training. Eigenständig nutzbare Web-App mit lokal gespeicherten Einträgen, JSON-Sicherung und Excel-Auswertung.

## Auf GitHub veröffentlichen

1. Das ZIP auf dem Computer entpacken.
2. Im vorgesehenen GitHub-Repository **Add file → Upload files** öffnen.
3. Den gesamten **Inhalt** des entpackten Pakets hochladen: `index.html`, `manifest.webmanifest`, `sw.js`, `README.md`, `favicon.ico`, `.nojekyll` sowie alle Symboldateien (`icon-*.png`, `favicon-*.png`, `apple-touch-icon.png`). Alle Dateien liegen direkt im Hauptverzeichnis, es gibt keinen Unterordner. Die `index.html` muss direkt im Hauptverzeichnis liegen. Das ZIP und den äußeren Paketordner nicht als Ersatz hochladen.
4. Mit **Commit changes** speichern. Bei einer vorhandenen App die gleichnamigen Dateien ersetzen; keine zweite Datei mit einem Namen wie `index(1).html` anlegen.
5. Bei einem neuen Repository **Settings → Pages** öffnen: **Source → Deploy from a branch**, **Branch → main**, **Folder → /(root)**, dann **Save**. Bei einem vorhandenen Repository die bereits verwendete Veröffentlichungsbranch auswählen.
6. Warten, bis GitHub die Veröffentlichung abgeschlossen hat. Den unter **Pages** angezeigten HTTPS-Link öffnen und für Tester weitergeben.

Offizielle Anleitung: [Veröffentlichungsquelle für GitHub Pages konfigurieren](https://docs.github.com/de/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

Alle Dateiverweise sind relativ. Das Paket kann deshalb auch unter einem Repository-Unterpfad bereitgestellt werden. Es benötigt keinen Build-Schritt und keine externen JavaScript-Bibliotheken.

## Als App installieren

- **Android:** Den veröffentlichten App-Link in Chrome öffnen, vollständig laden lassen und im Browsermenü **App installieren** bzw. **Zum Startbildschirm hinzufügen** wählen.
- **iPhone / iPad:** Den App-Link in Safari öffnen, vollständig laden lassen und **Teilen → Zum Home-Bildschirm** wählen.
- **Windows / PC:** Den App-Link in Edge oder Chrome öffnen und die angebotene Installation im Browsermenü bzw. in der Adressleiste verwenden.

Danach kann die App über das neue Symbol gestartet werden. Erfassung, Auswertung und Export sind nach dem ersten vollständigen Online-Aufruf auch offline nutzbar. Wetter und Ortsnamen benötigen Internet. Standortermittlung benötigt die Standortfreigabe und ein verfügbares Positionssignal.

## Team und Daten

Beim ersten Start sind die Teamfelder leer. Unter **Team-Daten bearbeiten** das eigene Team eintragen oder eine vorhandene JSON-Sicherung wiederherstellen. Profile und Einträge werden lokal im Browser gespeichert. Kein Konto erforderlich.

Die Speicherkennungen der Version 2.9 bleiben erhalten. Bei einem Update unter derselben Webadresse mit demselben Browser werden vorhandene Daten weiter geladen. Ein anderer Browser, ein anderes Gerät oder eine andere GitHub-Domain teilt diesen Speicher nicht automatisch. Vor Updates und Gerätewechseln eine **Externe JSON-Zwischensicherung** herunterladen. Einträge werden nicht im GitHub-Repository gespeichert.

## Inhalt dieses Updates

- Neues Fläche-/Trümmer-Icon im App-Kopf, auf dem Startbildschirm und als Favicon.
- Icons in 192 und 512 Pixeln; zusätzliche Maskable-Varianten mit Sicherheitsabstand, Apple-Touch-Icon und hochauflösende Vorlage.
- Vollständiges Offline-Paket ohne fehlende Icon-Dateien.
- App-bezogene Cache-Namen: Der Service Worker löscht keine Caches anderer RH-Apps auf derselben Domain.
- Leeres Teamprofil für neue Nutzer; bestehende lokale Profile bleiben erhalten.

## Spätere Updates

Die geänderten Dateien unter denselben Namen hochladen. In `sw.js` die Konstante `RELEASE` erhöhen und die Versionsangabe in der App aktualisieren. Nach der Veröffentlichung die App mit Internet neu öffnen. Ein bereits installiertes Startbildschirmsymbol kann vom Betriebssystem verzögert aktualisiert werden; bei Bedarf nach einer JSON-Sicherung die Startbildschirm-Verknüpfung neu anlegen.

© 2026 Michaela Weiße. Alle Rechte vorbehalten. Impressum und Datenschutzhinweise sind in der App unter **§ Impressum & Datenschutz** abrufbar. Keine offizielle Anwendung des Deutschen Roten Kreuzes.
