"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PackageMetadata model module.
 * @module model/PackageMetadata
 * @version 3.0.0-alpha1
 */
var PackageMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PackageMetadata</code>.
   * [Package metadata](#metadata-model) that has been extracted from the uploaded package. 
   * @alias module:model/PackageMetadata
   */
  function PackageMetadata() {
    _classCallCheck(this, PackageMetadata);

    PackageMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PackageMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PackageMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PackageMetadata} obj Optional instance to populate.
     * @return {module:model/PackageMetadata} The populated <code>PackageMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PackageMetadata();

        if (data.hasOwnProperty('authors')) {
          obj['authors'] = _ApiClient["default"].convertToType(data['authors'], ['String']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('hashsum')) {
          obj['hashsum'] = _ApiClient["default"].convertToType(data['hashsum'], 'String');
        }

        if (data.hasOwnProperty('language')) {
          obj['language'] = _ApiClient["default"].convertToType(data['language'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PackageMetadata;
}();
/**
 * A list of package authors' email addresses.
 * @member {Array.<String>} authors
 */


PackageMetadata.prototype['authors'] = undefined;
/**
 * Description of the Compute@Edge package.
 * @member {String} description
 */

PackageMetadata.prototype['description'] = undefined;
/**
 * Hash of the Compute@Edge package.
 * @member {String} hashsum
 */

PackageMetadata.prototype['hashsum'] = undefined;
/**
 * The language of the Compute@Edge package.
 * @member {String} language
 */

PackageMetadata.prototype['language'] = undefined;
/**
 * Name of the Compute@Edge package.
 * @member {String} name
 */

PackageMetadata.prototype['name'] = undefined;
/**
 * Size of the Compute@Edge package in bytes.
 * @member {Number} size
 */

PackageMetadata.prototype['size'] = undefined;
var _default = PackageMetadata;
exports["default"] = _default;