const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topicsArray = ['javascript', 'bootstrap', 'technology'];
  //creating mark up
  const containerTopics = document.createElement('div');
  const java = document.createElement('div');
  const bootstrap = document.createElement('div');
  const technology = document.createElement('div');
  //adding class names
  containerTopics.classList.add('topics');
  java.classList.add('tab');
  bootstrap.classList.add('tab');
  technology.classList.add('tab');
  //adding textContent
  java.textContent = topicsArray[0];
  bootstrap.textContent = topicsArray[1];
  technology.textContent = topicsArray[2];
  //appending childrend
  containerTopics.appendChild(java);
  containerTopics.appendChild(bootstrap);
  containerTopics.appendChild(technology);

  return containerTopics;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabHolder = document.querySelector(selector);
  tabHolder.appendChild(Tabs('javascript'));
}

export { Tabs, tabsAppender }
