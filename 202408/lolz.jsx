// this is a preview of react
// docs are at https://react.dev if you are curious

function pageHeader() {
    const colorBlue = {
        color: "blue"
    };
    function returnWords() {
        return 'words from Michael Harris'
    }
    return (
        <div>
            <h1 style={colorBlue}>This is React JSX</h1>
            <p>returnWords()</p>
        </div>
    )
}