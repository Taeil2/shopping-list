$(function() {
    // Add an item
    $('#js-shopping-list-form').submit(function(e) {
        e.preventDefault();

        let itemName = $('#shopping-list-entry').val();

        $('.shopping-list').append(`<li><span class="shopping-item">${itemName}</span><div class="shopping-item-controls"> <button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);

        // Initiate the item just added
        let newItem = $('.shopping-list li:last-of-type');
        initiateItem(newItem);

        // Clear the input
        $('#shopping-list-entry').val('');
    });

    // Initiate the buttons for each existing item
    $('.shopping-list li').each(function() {
        initiateItem($(this));
    });
});

function initiateItem(li) {
    // Check an item (or uncheck)
    li.find('.shopping-item-toggle').click(function() {
        li.find('.shopping-item').toggleClass('shopping-item__checked');
    });

    // Delete an item
    li.find('.shopping-item-delete').click(function() {
        li.remove();
    });
}
