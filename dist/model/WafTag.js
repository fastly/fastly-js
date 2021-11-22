"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TypeWafTag = _interopRequireDefault(require("./TypeWafTag"));

var _WafTagAttributes = _interopRequireDefault(require("./WafTagAttributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafTag model module.
 * @module model/WafTag
 * @version 3.0.0-alpha1
 */
var WafTag = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafTag</code>.
   * @alias module:model/WafTag
   */
  function WafTag() {
    _classCallCheck(this, WafTag);

    WafTag.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafTag, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafTag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafTag} obj Optional instance to populate.
     * @return {module:model/WafTag} The populated <code>WafTag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafTag();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeWafTag["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _WafTagAttributes["default"].constructFromObject(data['attributes']);
        }
      }

      return obj;
    }
  }]);

  return WafTag;
}();
/**
 * @member {module:model/TypeWafTag} type
 */


WafTag.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a WAF tag.
 * @member {String} id
 */

WafTag.prototype['id'] = undefined;
/**
 * @member {module:model/WafTagAttributes} attributes
 */

WafTag.prototype['attributes'] = undefined;
var _default = WafTag;
exports["default"] = _default;