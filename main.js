
//Para editar o cracha, basta editar os logins em "linksSocialMedia"
//Exemplo: github: 'nomeUsuario'
const linksSocialMedia = {
    github:'fabio-ss',
    youtube: 'channel/UCUnw1BglLx8tc7Of7wRK0iw',
    facebook: 'faabioos',
    instagram: 'fsdssouza',
    twitter: 'faabioosouza'
  }

  function changeSocialMediaLinks(){
    for (let li of socialLinks.children){
      const social = li.getAttribute('class')
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

      //Testando Troca de Links
      //alert(li.children[0].href)
    }
  }
  changeSocialMediaLinks()

  function getGitHubProfileInfos(){
    const url =`https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()