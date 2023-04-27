export const madeLinkToPage = (id, page) => {
    document.querySelector(id).addEventListener('click', () => {
        page()
    })
}


