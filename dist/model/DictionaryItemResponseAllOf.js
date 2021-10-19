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
 * The DictionaryItemResponseAllOf model module.
 * @module model/DictionaryItemResponseAllOf
 * @version 3.0.0-alpha1
 */
var DictionaryItemResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DictionaryItemResponseAllOf</code>.
   * @alias module:model/DictionaryItemResponseAllOf
   */
  function DictionaryItemResponseAllOf() {
    _classCallCheck(this, DictionaryItemResponseAllOf);

    DictionaryItemResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DictionaryItemResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DictionaryItemResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DictionaryItemResponseAllOf} obj Optional instance to populate.
     * @return {module:model/DictionaryItemResponseAllOf} The populated <code>DictionaryItemResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DictionaryItemResponseAllOf();

        if (data.hasOwnProperty('dictionary_id')) {
          obj['dictionary_id'] = _ApiClient["default"].convertToType(data['dictionary_id'], 'String');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DictionaryItemResponseAllOf;
}();
/**
 * Alphanumeric string identifying a Dictionary.
 * @member {String} dictionary_id
 */


DictionaryItemResponseAllOf.prototype['dictionary_id'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

DictionaryItemResponseAllOf.prototype['service_id'] = undefined;
var _default = DictionaryItemResponseAllOf;
exports["default"] = _default;