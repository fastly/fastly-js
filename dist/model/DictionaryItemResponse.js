"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DictionaryItem = _interopRequireDefault(require("./DictionaryItem"));

var _DictionaryItemResponseAllOf = _interopRequireDefault(require("./DictionaryItemResponseAllOf"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DictionaryItemResponse model module.
 * @module model/DictionaryItemResponse
 * @version 3.0.0-alpha1
 */
var DictionaryItemResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DictionaryItemResponse</code>.
   * @alias module:model/DictionaryItemResponse
   */
  function DictionaryItemResponse() {
    _classCallCheck(this, DictionaryItemResponse);

    DictionaryItemResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DictionaryItemResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DictionaryItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DictionaryItemResponse} obj Optional instance to populate.
     * @return {module:model/DictionaryItemResponse} The populated <code>DictionaryItemResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DictionaryItemResponse();

        if (data.hasOwnProperty('item_key')) {
          obj['item_key'] = _ApiClient["default"].convertToType(data['item_key'], 'String');
        }

        if (data.hasOwnProperty('item_value')) {
          obj['item_value'] = _ApiClient["default"].convertToType(data['item_value'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

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

  return DictionaryItemResponse;
}();
/**
 * Item key, maximum 256 characters.
 * @member {String} item_key
 */


DictionaryItemResponse.prototype['item_key'] = undefined;
/**
 * Item value, maximum 8000 characters.
 * @member {String} item_value
 */

DictionaryItemResponse.prototype['item_value'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

DictionaryItemResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

DictionaryItemResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

DictionaryItemResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying a Dictionary.
 * @member {String} dictionary_id
 */

DictionaryItemResponse.prototype['dictionary_id'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

DictionaryItemResponse.prototype['service_id'] = undefined;
var _default = DictionaryItemResponse;
exports["default"] = _default;