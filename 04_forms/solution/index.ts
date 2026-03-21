/** Render the given movies into table rows. */
function renderMovies(
    movies: Array<{ title: string; year: string }>,
): Array<HTMLTableRowElement> {
    return movies.map(movie => {
        const row = document.createElement("tr");
        const titleTd = document.createElement("td");
        titleTd.textContent = movie.title;
        const yearTd = document.createElement("td");
        yearTd.textContent = movie.year;
        row.append(titleTd, yearTd);
        return row;
    });
}

/** Extract a movie out of the given form data. */
function getMovie(
    data: FormData,
): { title: string; year: string } {
    const title = data.get("title")?.toString() ?? "";
    const year = data.get("year")?.toString() ?? "";
    return { title, year };
}

/** Add a movie in place with the given title and year. */
function addMovie(
    movies: Array<{ title: string; year: string }>,
    movie: { title: string; year: string },
): void {
    movies.push(movie);
}

/** Handle form submit events. */
function handleSubmit(
    event: SubmitEvent,
    movies: Array<{ title: string; year: string }>,
    form: HTMLFormElement,
    tbody: HTMLElement,
): void {
    event.preventDefault();
    const data = new FormData(form);
    const movie = getMovie(data);
    addMovie(movies, movie);
    form.reset();
    const rows = renderMovies(movies);
    tbody.replaceChildren(...rows);
}

/** Handle input events. */
function handleInput(
    input: HTMLInputElement,
    movies: Array<{ title: string; year: string }>,
    tbody: HTMLElement,
): void {
    const query = input.value;
    const results = movies.filter(movie =>
        movie.title.includes(query) || movie.year.includes(query)
    );
    const rows = renderMovies(results);
    tbody.replaceChildren(...rows);
}

function main(): void {
    const addForm = document.querySelector("form#add");
    const searchInput = document.querySelector("form#search input");
    const tbody = document.querySelector("tbody");

    if (
        !(addForm instanceof HTMLFormElement)
        || !(searchInput instanceof HTMLInputElement)
        || !(tbody instanceof HTMLElement)
    ) return;

    const movies: Array<{ title: string; year: string }> = [];

    addForm.addEventListener(
        "submit",
        (event) => handleSubmit(event, movies, addForm, tbody),
    );

    searchInput.addEventListener(
        "input",
        () => handleInput(searchInput, movies, tbody),
    );
}

main();
