Based on the original user script at https://github.com/drakeapps/synccit-browser-extension

README adapted from the original project
----------------------------------------

SETUP:

1. On reddit.com, first page load will show settings page
2. Fille in username and auth. username is username of synccit account. auth is device auth code from devices page on synccit.com
3. (optional) Change api server if not using synccit.com (default is api.synccit.com/api.php)
4. Save changes. This will reload the page
5. To edit these settings later, click synccit link at bottom of a reddit page



Firefox add-on

* It doesn't actually modify your browser history, just changes the color of the links.
* The number of comments that are counted as read are based what it says on the page when you click the link.
* If you're using RES, turning off new comment count is probably a good idea, otherwise you'll end up with 2 unread counts.


To make Firefox extension:

1. Use Firefox Add-on SDK and the `cfx xpi` command: [Getting Started With cfx][1]


LICENSE:



    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.


[1]: https://addons.mozilla.org/en-US/developers/docs/sdk/latest/dev-guide/tutorials/getting-started-with-cfx.html
