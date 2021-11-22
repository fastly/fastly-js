"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IncludedWithWafFirewallVersionItem = _interopRequireDefault(require("./IncludedWithWafFirewallVersionItem"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _WafFirewallVersionResponseData = _interopRequireDefault(require("./WafFirewallVersionResponseData"));

var _WafFirewallVersionsResponseAllOf = _interopRequireDefault(require("./WafFirewallVersionsResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewallVersionsResponse model module.
 * @module model/WafFirewallVersionsResponse
 * @version 3.0.0-alpha1
 */
var WafFirewallVersionsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallVersionsResponse</code>.
   * @alias module:model/WafFirewallVersionsResponse
   * @implements module:model/Pagination
   * @implements module:model/WafFirewallVersionsResponseAllOf
   */
  function WafFirewallVersionsResponse() {
    _classCallCheck(this, WafFirewallVersionsResponse);

    _Pagination["default"].initialize(this);

    _WafFirewallVersionsResponseAllOf["default"].initialize(this);

    WafFirewallVersionsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallVersionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallVersionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallVersionsResponse} obj Optional instance to populate.
     * @return {module:model/WafFirewallVersionsResponse} The populated <code>WafFirewallVersionsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallVersionsResponse();

        _Pagination["default"].constructFromObject(data, obj);

        _WafFirewallVersionsResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafFirewallVersionResponseData["default"]]);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_IncludedWithWafFirewallVersionItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafFirewallVersionsResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


WafFirewallVersionsResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

WafFirewallVersionsResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/WafFirewallVersionResponseData>} data
 */

WafFirewallVersionsResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafFirewallVersionItem>} included
 */

WafFirewallVersionsResponse.prototype['included'] = undefined; // Implement Pagination interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_Pagination["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_Pagination["default"].prototype['meta'] = undefined; // Implement WafFirewallVersionsResponseAllOf interface:

/**
 * @member {Array.<module:model/WafFirewallVersionResponseData>} data
 */

_WafFirewallVersionsResponseAllOf["default"].prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafFirewallVersionItem>} included
 */

_WafFirewallVersionsResponseAllOf["default"].prototype['included'] = undefined;
var _default = WafFirewallVersionsResponse;
exports["default"] = _default;