# Projektname

**Kurzbeschreibung des Projekts**

Dieses Repository enthält [Beschreibung des Projekts]. Dieses Tutorial hilft Anfängern, das Repository zu klonen, Änderungen vorzunehmen und diese wieder auf GitHub hochzuladen.

## Voraussetzungen

Bevor du beginnst, stelle sicher, dass du folgende Programme installiert hast:

- [Git](https://git-scm.com/downloads)
- [Ein Code-Editor (z. B. VS Code)](https://code.visualstudio.com/)
- [GitHub-Account](https://github.com/)

---

## 1. Repository klonen

Öffne ein Terminal oder die Eingabeaufforderung und gib folgenden Befehl ein:

```bash
git clone https://github.com/dein-benutzername/dein-repository.git
```

Ersetze `dein-benutzername` und `dein-repository` mit den tatsächlichen Werten.

Navigiere dann in das Projektverzeichnis:

```bash
cd dein-repository
```

---

## 2. Neuen Branch erstellen

Erstelle einen neuen Branch, um Änderungen vorzunehmen, ohne die Hauptversion zu beeinflussen:

```bash
git checkout -b neuer-branch-name
```

---

## 3. Änderungen vornehmen

Öffne die Projektdateien in einem Code-Editor und nimm die gewünschten Änderungen vor. Speichere alle Änderungen.

---

## 4. Änderungen speichern (Commit)

Überprüfe den Status deiner Änderungen:

```bash
git status
```

Füge alle geänderten Dateien zur Staging-Area hinzu:

```bash
git add .
```

Erstelle einen Commit mit einer Beschreibung der Änderungen:

```bash
git commit -m "Beschreibung der Änderung"
```

---

## 5. Änderungen auf GitHub hochladen (Push)

Schiebe deinen Branch auf GitHub:

```bash
git push origin neuer-branch-name
```

---

## 6. Pull Request erstellen

1. Gehe zu [GitHub](https://github.com/) und navigiere zu deinem Repository.
2. Klicke auf **Pull Requests**.
3. Klicke auf **New Pull Request**.
4. Wähle den Branch aus, den du erstellt hast.
5. Beschreibe deine Änderungen und klicke auf **Create Pull Request**.

Ein Repository-Maintainer wird deinen Vorschlag überprüfen und ggf. zusammenführen.

---

## 7. Weitere Befehle und nützliche Tipps

Falls du Änderungen rückgängig machen möchtest:

```bash
git checkout -- datei-name
```

Falls du deinen Branch auf den neuesten Stand bringen möchtest:

```bash
git pull origin main
```

Falls du einen Branch löschen möchtest:

```bash
git branch -d branch-name
```

---

## Unterstützung

Falls du Fragen hast, erstelle ein [Issue](https://github.com/dein-benutzername/dein-repository/issues) oder kontaktiere die Maintainer.

Viel Erfolg mit dem Projekt! 🚀

