/** Fix for IE11 and Edge:
 *  File constructor not supported on IE11 and Edge
 *  The polyfill adds the constructor so we can use new File() on Edge and IE
 */
let File = window.File

try {
  new File([], '')
} catch (e) {
  File = class File extends Blob {
    constructor(chunks, filename, opts = {}) {
      super(chunks, opts)
      this.lastModifiedDate = new Date()
      this.lastModified = +this.lastModifiedDate
      this.name = filename
    }
  }
  window.File = File
}
