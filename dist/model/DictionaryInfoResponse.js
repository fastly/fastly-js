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
 * The DictionaryInfoResponse model module.
 * @module model/DictionaryInfoResponse
 * @version 3.0.0-alpha1
 */
var DictionaryInfoResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DictionaryInfoResponse</code>.
   * @alias module:model/DictionaryInfoResponse
   */
  function DictionaryInfoResponse() {
    _classCallCheck(this, DictionaryInfoResponse);

    DictionaryInfoResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DictionaryInfoResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DictionaryInfoResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DictionaryInfoResponse} obj Optional instance to populate.
     * @return {module:model/DictionaryInfoResponse} The populated <code>DictionaryInfoResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DictionaryInfoResponse();

        if (data.hasOwnProperty('last_updated')) {
          obj['last_updated'] = _ApiClient["default"].convertToType(data['last_updated'], 'String');
        }

        if (data.hasOwnProperty('item_count')) {
          obj['item_count'] = _ApiClient["default"].convertToType(data['item_count'], 'Number');
        }

        if (data.hasOwnProperty('digest')) {
          obj['digest'] = _ApiClient["default"].convertToType(data['digest'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DictionaryInfoResponse;
}();
/**
 * Timestamp (UTC) when the dictionary was last updated or an item was added or removed.
 * @member {String} last_updated
 */


DictionaryInfoResponse.prototype['last_updated'] = undefined;
/**
 * The number of items currently in the dictionary.
 * @member {Number} item_count
 */

DictionaryInfoResponse.prototype['item_count'] = undefined;
/**
 * A hash of all the dictionary content.
 * @member {String} digest
 */

DictionaryInfoResponse.prototype['digest'] = undefined;
var _default = DictionaryInfoResponse;
exports["default"] = _default;