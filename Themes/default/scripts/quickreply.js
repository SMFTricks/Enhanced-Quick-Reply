/**
 * @package Enhanced Quick Reply
 * @version 1.0
 * @author Diego Andrés <diegoandres_cortes@outlook.com>
 * @copyright Copyright (c) 2022, SMF Tricks
 * @license https://www.mozilla.org/en-US/MPL/2.0/
 */

// Collapsed
function quickreply_collaped_behavior()
{
	// Hide the quick reply box
	document.getElementById('quickreply_options').style.display = 'none';
	// Set the height to auto
	document.getElementById('quickreply_options').style.height = 'auto';
	// Restore the scale property
	document.getElementById('quickreply_options').style.scale = 1;
	// Toggle when clicking the title
	document.getElementById('quickreply').querySelector('.cat_bar').addEventListener('click', function() {
		// For now, use jQuery
		$('#quickreply_options').slideToggle();
	});
	// Make it visible when quoting selected text or quoteAll
	document.querySelectorAll('li.quoteSelected > a, li.quoteAll > a').forEach(function(element) {
		element.addEventListener('click', function() {
			document.getElementById('quickreply_options').style.display = 'block';
		});
	});
}

// Minimalistic
function quickreply_minimalistic_behavior()
{
	// Get the alert element
	let alertElement = document.getElementById('quickreply').getElementsByTagName('p');

	// Did we find anything?
	if (alertElement.length > 0)
	{
		// Remove the alert class
		alertElement[0].classList.remove('alert');

		// Add the errorbox class
		alertElement[0].classList.add('errorbox');
	}

	// Get the quickreply options
	let quickreply_options = document.getElementById('quickreply_options');
	// Get the textarea
	let quickreply_textarea = quickreply_options.querySelector('textarea');
	// Add a placeholder
	quickreply_textarea.placeholder = quickreply_placeholder;

	// Textarea focus
	quickreply_textarea.addEventListener('focus', function()
	{
		// Remove the max-height limitation from the textarea
		this.style.maxHeight = 'none';
		// Min Height for the toolbar
		quickreply_options.querySelector('.sceditor-container').style.minHeight = '140px';
		// Show the toolbar
		quickreply_options.querySelector('.sceditor-toolbar').style.display = 'block';
		// Show the emoticons
		quickreply_options.querySelector('.sceditor-insertemoticon').style.display = 'block';
		// Show the buttons
		document.getElementById('post_confirm_buttons').style.display = 'inline-flex';
	});
}