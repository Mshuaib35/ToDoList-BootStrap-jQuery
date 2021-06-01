let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')
let btnCleanup = $('#btnCleanup')
let btnSort = $('#btnSort')

function addItem()
{
    
        let listItem = $('<li>', {
          'class': 'list-group-item',
          text: inpNewTask.val()
        })
      
        listItem.click(() => {
          listItem.toggleClass('done')
        })
      
        ulTasks.append(listItem)
        inpNewTask.val('')
        toggleInputButtons()

    }

    //Clear Button Function
    function clearDone() {
        $('#ulTasks .done').remove()
        toggleInputButtons()
      }
    //Sort Button Function 
      function sortTasks() {
        $('#ulTasks .done').appendTo(ulTasks)
      }


      function toggleInputButtons() {
        btnReset.prop('disabled', inpNewTask.val() == '') //if the input text is null then Buttons will be disabled
        btnAdd.prop('disabled', inpNewTask.val() == '')
        btnSort.prop('disabled', ulTasks.children().length < 1) //if there is no task then the Buttons will be disabled
        btnCleanup.prop('disabled', ulTasks.children().length < 1)//ulTasks.children().length = 0 if the task is empty
      }

   
    inpNewTask.keypress((e) => {
        if (e.which == 13) addItem()  

})

inpNewTask.on('input', toggleInputButtons)

btnAdd.click(addItem)

btnReset.click(() => {
    inpNewTask.val('')
    toggleInputButtons()
  })

btnCleanup.click(clearDone)

btnSort.click(sortTasks)