export const urlify = text => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, url =>
        `<a href='${url}' target='blank'>${url}</a>`
    );
}