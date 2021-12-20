const btns = document.querySelectorAll(".btn");
const items = document.querySelectorAll(".item");

btns.forEach(
    (btn) => {
        btn.addEventListener('click', function(e) {
            let filter = e.target.dataset.filter;
            items.forEach(
                (item) => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                    }
                    else {
                        if(filter === item.dataset.filter){
                            item.style.display = "block";
                        }else{
                            item.style.display = "none";
                        }
                    }
                }
            )
        });
    }
);




