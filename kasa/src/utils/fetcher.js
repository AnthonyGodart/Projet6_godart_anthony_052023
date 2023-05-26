async function fetcher(){
    let response = await fetch('/data/db.json')
    return (await response.json())
}
export default fetcher