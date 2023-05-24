
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/gus955/js-developer-portfolio-gus/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
