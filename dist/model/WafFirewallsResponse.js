"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _SchemasWafFirewallVersion = _interopRequireDefault(require("./SchemasWafFirewallVersion"));

var _WafFirewallResponseData = _interopRequireDefault(require("./WafFirewallResponseData"));

var _WafFirewallsResponseAllOf = _interopRequireDefault(require("./WafFirewallsResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafFirewallsResponse model module.
 * @module model/WafFirewallsResponse
 * @version 3.0.0-alpha1
 */
var WafFirewallsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafFirewallsResponse</code>.
   * @alias module:model/WafFirewallsResponse
   * @implements module:model/Pagination
   * @implements module:model/WafFirewallsResponseAllOf
   */
  function WafFirewallsResponse() {
    _classCallCheck(this, WafFirewallsResponse);

    _Pagination["default"].initialize(this);

    _WafFirewallsResponseAllOf["default"].initialize(this);

    WafFirewallsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafFirewallsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafFirewallsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallsResponse} obj Optional instance to populate.
     * @return {module:model/WafFirewallsResponse} The populated <code>WafFirewallsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafFirewallsResponse();

        _Pagination["default"].constructFromObject(data, obj);

        _WafFirewallsResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafFirewallResponseData["default"]]);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_SchemasWafFirewallVersion["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafFirewallsResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


WafFirewallsResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

WafFirewallsResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/WafFirewallResponseData>} data
 */

WafFirewallsResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/SchemasWafFirewallVersion>} included
 */

WafFirewallsResponse.prototype['included'] = undefined; // Implement Pagination interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_Pagination["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_Pagination["default"].prototype['meta'] = undefined; // Implement WafFirewallsResponseAllOf interface:

/**
 * @member {Array.<module:model/WafFirewallResponseData>} data
 */

_WafFirewallsResponseAllOf["default"].prototype['data'] = undefined;
/**
 * @member {Array.<module:model/SchemasWafFirewallVersion>} included
 */

_WafFirewallsResponseAllOf["default"].prototype['included'] = undefined;
var _default = WafFirewallsResponse;
exports["default"] = _default;