async function newFormHandler(event) {
    event.preventDefault();

    //https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector element = document.querySelector(selectors);
    const title = document.querySelector('input[name="post-title"]').value;
     const post_content = document.querySelector('textarea[name="post-content"]').value.trim();

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content
        }),
        //https://developer.mozilla.org/en-US/docs/Web/API/Headers Headers interface of the Fetch API allows changes to and action on response header
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //boolean value if then - or basically true or false https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
//https://developer.mozilla.org/en-US/docs/WebAssembly/Reference/Control_flow/if...else
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector Document.querySelector()
// Document method querySelector() - returns first Element in the doc that matches specified selector or group of - no matches = null is returned.
//EventListener.handleEvent() = function that is called whenever an event of the specified type occurs. https://developer.mozilla.org/en-US/docs/Web/API/EventListener
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);