"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IncludedWithWafRuleItem = _interopRequireDefault(require("./IncludedWithWafRuleItem"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _WafRuleResponseData = _interopRequireDefault(require("./WafRuleResponseData"));

var _WafRulesResponseAllOf = _interopRequireDefault(require("./WafRulesResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafRulesResponse model module.
 * @module model/WafRulesResponse
 * @version 3.0.0-alpha1
 */
var WafRulesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafRulesResponse</code>.
   * @alias module:model/WafRulesResponse
   * @implements module:model/Pagination
   * @implements module:model/WafRulesResponseAllOf
   */
  function WafRulesResponse() {
    _classCallCheck(this, WafRulesResponse);

    _Pagination["default"].initialize(this);

    _WafRulesResponseAllOf["default"].initialize(this);

    WafRulesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafRulesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafRulesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRulesResponse} obj Optional instance to populate.
     * @return {module:model/WafRulesResponse} The populated <code>WafRulesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafRulesResponse();

        _Pagination["default"].constructFromObject(data, obj);

        _WafRulesResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafRuleResponseData["default"]]);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_IncludedWithWafRuleItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafRulesResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


WafRulesResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

WafRulesResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/WafRuleResponseData>} data
 */

WafRulesResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafRuleItem>} included
 */

WafRulesResponse.prototype['included'] = undefined; // Implement Pagination interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_Pagination["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_Pagination["default"].prototype['meta'] = undefined; // Implement WafRulesResponseAllOf interface:

/**
 * @member {Array.<module:model/WafRuleResponseData>} data
 */

_WafRulesResponseAllOf["default"].prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafRuleItem>} included
 */

_WafRulesResponseAllOf["default"].prototype['included'] = undefined;
var _default = WafRulesResponse;
exports["default"] = _default;