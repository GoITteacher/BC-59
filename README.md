```js
`
<h2>${user.name}</h2>
<hr>
- <span>${user.email}</span><br>
- <span>${user.phone}</span><br>
- <a href="${user.website}">${user.website}</a>
<hr>
Adress: ${user.address.city} - ${user.address.street}
<hr>
Company: ${user.company.name}
<hr>
<div class="fb fb-v list js-modal-list" style="max-height: 500px; overflow-y: auto;">
    ${imagesMarkup}
</div>`;
```
