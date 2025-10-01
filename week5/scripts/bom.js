const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function() {
  if (input.value.trim() !== '') {
    const li = document.createElement("li");
    li.textContent = input.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = '';
    input.focus();
  } else {
    input.focus(); 
  }
});


let chaptersArray = getChapterList() || [];
    chaptersArray.forEach(chapter => {
      displayList(chapter);
  });
  button.addEventListener('click', () => {
  if (input.value != '') {  
    displayList(input.value); 
    chaptersArray.push(input.value);  
    setChapterList(); 
    input.value = ''; 
    input.focus(); 
  }
  })

  function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item; 
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete'); 
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent); 
  });
  console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

chapter = chapter.slice(0, chapter.length -1);

chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}