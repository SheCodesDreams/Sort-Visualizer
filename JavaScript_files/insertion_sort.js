async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].classList.add('sorted');
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        let keyValue = ele[i].querySelector('.bar-value').textContent;
        // color
        ele[i].classList.add('comparing');

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].classList.add('comparing');
            ele[j + 1].style.height = ele[j].style.height;
            ele[j + 1].querySelector('.bar-value').textContent = ele[j].querySelector('.bar-value').textContent;
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].classList.remove('comparing');
                ele[k].classList.add('sorted');
            }
        }
        ele[j + 1].style.height = key;
        ele[j + 1].querySelector('.bar-value').textContent = keyValue;
        // color
        ele[i].classList.remove('comparing');
        ele[i].classList.add('sorted');
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});