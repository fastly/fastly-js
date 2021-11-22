"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _WafRule = _interopRequireDefault(require("./WafRule"));

var _WafRuleRevisionResponseData = _interopRequireDefault(require("./WafRuleRevisionResponseData"));

var _WafRuleRevisionsResponseAllOf = _interopRequireDefault(require("./WafRuleRevisionsResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafRuleRevisionsResponse model module.
 * @module model/WafRuleRevisionsResponse
 * @version 3.0.0-alpha1
 */
var WafRuleRevisionsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafRuleRevisionsResponse</code>.
   * @alias module:model/WafRuleRevisionsResponse
   * @implements module:model/Pagination
   * @implements module:model/WafRuleRevisionsResponseAllOf
   */
  function WafRuleRevisionsResponse() {
    _classCallCheck(this, WafRuleRevisionsResponse);

    _Pagination["default"].initialize(this);

    _WafRuleRevisionsResponseAllOf["default"].initialize(this);

    WafRuleRevisionsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafRuleRevisionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafRuleRevisionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafRuleRevisionsResponse} obj Optional instance to populate.
     * @return {module:model/WafRuleRevisionsResponse} The populated <code>WafRuleRevisionsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafRuleRevisionsResponse();

        _Pagination["default"].constructFromObject(data, obj);

        _WafRuleRevisionsResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafRuleRevisionResponseData["default"]]);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_WafRule["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafRuleRevisionsResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


WafRuleRevisionsResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

WafRuleRevisionsResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/WafRuleRevisionResponseData>} data
 */

WafRuleRevisionsResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/WafRule>} included
 */

WafRuleRevisionsResponse.prototype['included'] = undefined; // Implement Pagination interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_Pagination["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_Pagination["default"].prototype['meta'] = undefined; // Implement WafRuleRevisionsResponseAllOf interface:

/**
 * @member {Array.<module:model/WafRuleRevisionResponseData>} data
 */

_WafRuleRevisionsResponseAllOf["default"].prototype['data'] = undefined;
/**
 * @member {Array.<module:model/WafRule>} included
 */

_WafRuleRevisionsResponseAllOf["default"].prototype['included'] = undefined;
var _default = WafRuleRevisionsResponse;
exports["default"] = _default;