"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IncludedWithWafActiveRuleItem = _interopRequireDefault(require("./IncludedWithWafActiveRuleItem"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _WafActiveRuleResponse = _interopRequireDefault(require("./WafActiveRuleResponse"));

var _WafActiveRuleResponseData = _interopRequireDefault(require("./WafActiveRuleResponseData"));

var _WafActiveRulesResponse = _interopRequireDefault(require("./WafActiveRulesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafActiveRuleCreationResponse model module.
 * @module model/WafActiveRuleCreationResponse
 * @version 3.0.0-alpha1
 */
var WafActiveRuleCreationResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafActiveRuleCreationResponse</code>.
   * @alias module:model/WafActiveRuleCreationResponse
   * @implements module:model/WafActiveRuleResponse
   * @implements module:model/WafActiveRulesResponse
   */
  function WafActiveRuleCreationResponse() {
    _classCallCheck(this, WafActiveRuleCreationResponse);

    _WafActiveRuleResponse["default"].initialize(this);

    _WafActiveRulesResponse["default"].initialize(this);

    WafActiveRuleCreationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafActiveRuleCreationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafActiveRuleCreationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafActiveRuleCreationResponse} obj Optional instance to populate.
     * @return {module:model/WafActiveRuleCreationResponse} The populated <code>WafActiveRuleCreationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafActiveRuleCreationResponse();

        _WafActiveRuleResponse["default"].constructFromObject(data, obj);

        _WafActiveRulesResponse["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafActiveRuleResponseData["default"]]);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_IncludedWithWafActiveRuleItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafActiveRuleCreationResponse;
}();
/**
 * @member {Array.<module:model/WafActiveRuleResponseData>} data
 */


WafActiveRuleCreationResponse.prototype['data'] = undefined;
/**
 * @member {module:model/PaginationLinks} links
 */

WafActiveRuleCreationResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

WafActiveRuleCreationResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafActiveRuleItem>} included
 */

WafActiveRuleCreationResponse.prototype['included'] = undefined; // Implement WafActiveRuleResponse interface:

/**
 * @member {module:model/WafActiveRuleResponseData} data
 */

_WafActiveRuleResponse["default"].prototype['data'] = undefined; // Implement WafActiveRulesResponse interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_WafActiveRulesResponse["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_WafActiveRulesResponse["default"].prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/WafActiveRuleResponseData>} data
 */

_WafActiveRulesResponse["default"].prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafActiveRuleItem>} included
 */

_WafActiveRulesResponse["default"].prototype['included'] = undefined;
var _default = WafActiveRuleCreationResponse;
exports["default"] = _default;