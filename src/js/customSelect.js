import 'select2';

export default function() {

    $('.js-custom-select').each(function () {
        let currentSelect = $(this);

        currentSelect.select2({
            minimumResultsForSearch: -1,
            placeholder: "Please select a country",
            dropdownParent: currentSelect.parent()
        });

        currentSelect.on('change', () => {
            const event = new CustomEvent('choose');
            this.dispatchEvent(event);
        })
    });
    
}