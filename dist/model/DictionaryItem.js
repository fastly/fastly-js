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
 * The DictionaryItem model module.
 * @module model/DictionaryItem
 * @version 3.0.0-alpha1
 */
var DictionaryItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DictionaryItem</code>.
   * @alias module:model/DictionaryItem
   */
  function DictionaryItem() {
    _classCallCheck(this, DictionaryItem);

    DictionaryItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DictionaryItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DictionaryItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DictionaryItem} obj Optional instance to populate.
     * @return {module:model/DictionaryItem} The populated <code>DictionaryItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DictionaryItem();

        if (data.hasOwnProperty('item_key')) {
          obj['item_key'] = _ApiClient["default"].convertToType(data['item_key'], 'String');
        }

        if (data.hasOwnProperty('item_value')) {
          obj['item_value'] = _ApiClient["default"].convertToType(data['item_value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DictionaryItem;
}();
/**
 * Item key, maximum 256 characters.
 * @member {String} item_key
 */


DictionaryItem.prototype['item_key'] = undefined;
/**
 * Item value, maximum 8000 characters.
 * @member {String} item_value
 */

DictionaryItem.prototype['item_value'] = undefined;
var _default = DictionaryItem;
exports["default"] = _default;