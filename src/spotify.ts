export const authEndpoint = "https://accounts.spotify.com/authorize";
console.log(process.env)
const redirectUri = process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://spotify.phamquangson.com/";
// const redirectUri = "https://spotify.phamquangson.com/";
const clientId = "d7848714589f4e20a9866fe2e8868b8f"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial : any, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial;
        }, {})
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;