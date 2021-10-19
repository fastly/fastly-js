"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IncludedWithWafActiveRuleItem = _interopRequireDefault(require("./IncludedWithWafActiveRuleItem"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _WafActiveRuleResponseData = _interopRequireDefault(require("./WafActiveRuleResponseData"));

var _WafActiveRulesResponseAllOf = _interopRequireDefault(require("./WafActiveRulesResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafActiveRulesResponse model module.
 * @module model/WafActiveRulesResponse
 * @version 3.0.0-alpha1
 */
var WafActiveRulesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafActiveRulesResponse</code>.
   * @alias module:model/WafActiveRulesResponse
   */
  function WafActiveRulesResponse() {
    _classCallCheck(this, WafActiveRulesResponse);

    WafActiveRulesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafActiveRulesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafActiveRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRulesResponse} obj Optional instance to populate.
     * @return {module:model/WafActiveRulesResponse} The populated <code>WafActiveRulesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafActiveRulesResponse();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafActiveRuleResponseData["default"]]);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_IncludedWithWafActiveRuleItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafActiveRulesResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


WafActiveRulesResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

WafActiveRulesResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/WafActiveRuleResponseData>} data
 */

WafActiveRulesResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafActiveRuleItem>} included
 */

WafActiveRulesResponse.prototype['included'] = undefined;
var _default = WafActiveRulesResponse;
exports["default"] = _default;