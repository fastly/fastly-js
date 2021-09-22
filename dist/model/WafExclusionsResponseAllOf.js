"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IncludedWithWafExclusionItem = _interopRequireDefault(require("./IncludedWithWafExclusionItem"));

var _WafExclusionResponseData = _interopRequireDefault(require("./WafExclusionResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafExclusionsResponseAllOf model module.
 * @module model/WafExclusionsResponseAllOf
 * @version 3.0.0-alpha1
 */
var WafExclusionsResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafExclusionsResponseAllOf</code>.
   * @alias module:model/WafExclusionsResponseAllOf
   */
  function WafExclusionsResponseAllOf() {
    _classCallCheck(this, WafExclusionsResponseAllOf);

    WafExclusionsResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafExclusionsResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafExclusionsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/WafExclusionsResponseAllOf} The populated <code>WafExclusionsResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafExclusionsResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafExclusionResponseData["default"]]);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_IncludedWithWafExclusionItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafExclusionsResponseAllOf;
}();
/**
 * @member {Array.<module:model/WafExclusionResponseData>} data
 */


WafExclusionsResponseAllOf.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafExclusionItem>} included
 */

WafExclusionsResponseAllOf.prototype['included'] = undefined;
var _default = WafExclusionsResponseAllOf;
exports["default"] = _default;