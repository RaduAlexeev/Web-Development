// Write a memo app.It should have the following features:
// 1 .List memos.Print available info for a memo(note, creation date, id).print following message if there are no memos  "No notes to display"
// 2. Edit memo by id.Edit memo body for an existing entry.
// 3. Delete memo by id.


function Memo(id, text) {
    let body = text;
    let creationDate = new Date()
    let memoId = id

    this.printInfo = function() {
        console.log(`Created: ${creationDate}, id: ${memoId} \n
        ${body}`)
    }

    this.getId = function() {
        return memoId
    }

    this.setBody = function(newBody) {
        body = newBody
    }
}

// Интерфейс
function MemoApp() {

    // Сервис
    let memoService = new MemoService()

    this.create = function(text) {
        memoService.create(text)
    }

    // Методы
    this.showMemos = function() {
        let memos = memoService.getMemos()
        if (!memos) {
            console.log('No notes to display')
        } else {
            // in - для объектов
            for (memo in memos ) {
                memo.printInfo()
                console.log('~~~~~~~~~~~~~~~~~~')
            }
        }
    }

    this.edit = function(id, text) {
        memoService.editMemo(id, text)
        console.log('updating ...')
    }

    this.delete = function(id) {
        let memos = getMemos()
        memos.filter(elem => elem != id)
    }

}

function MemoService() {
    let memos = []
    let index = 1

    this.create = function(text) {
        id = index
        let newMemo = new Memo(id, text)
        memos.push(newMemo)
        index++
    }

    this.getMemos = function() {
        return memos        
    }

    this.editMemo = function(id, newText) {
        for (memo of memos) {
            if (memo.getId() === id) {
                memo.setBody(newText)
            }
        }
        // iterati prin array din memos pana cand gasiti memo cu id provided trimis si p/u acel obiect resetam textul
    }
}