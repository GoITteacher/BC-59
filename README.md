- Знайти форму
- Прослуховування інпутів
- Знайти інпут на якому сталась подія
- Зберігати значення в обьєкт
- Привести до JSON формату
- зберегти до LS

---

/_ getTimeComponents(time) { const hours = this.pad( Math.floor((time % (1000 _
60 _ 60 _ 24)) / (1000 _ 60 _ 60)), ); const mins = this.pad(Math.floor((time %
(1000 _ 60 _ 60)) / (1000 _ 60))); const secs = this.pad(Math.floor((time %
(1000 _ 60)) / 1000));

    return { hours, mins, secs };

} pad(value) { return String(value).padStart(2, '0'); }

\*/
