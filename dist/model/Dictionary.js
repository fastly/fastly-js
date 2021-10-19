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
 * The Dictionary model module.
 * @module model/Dictionary
 * @version 3.0.0-alpha1
 */
var Dictionary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Dictionary</code>.
   * @alias module:model/Dictionary
   */
  function Dictionary() {
    _classCallCheck(this, Dictionary);

    Dictionary.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Dictionary, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Dictionary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dictionary} obj Optional instance to populate.
     * @return {module:model/Dictionary} The populated <code>Dictionary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Dictionary();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('write_only')) {
          obj['write_only'] = _ApiClient["default"].convertToType(data['write_only'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Dictionary;
}();
/**
 * Name for the Dictionary.
 * @member {String} name
 */


Dictionary.prototype['name'] = undefined;
/**
 * Determines if items in the dictionary are readable or not.
 * @member {Boolean} write_only
 * @default false
 */

Dictionary.prototype['write_only'] = false;
var _default = Dictionary;
exports["default"] = _default;