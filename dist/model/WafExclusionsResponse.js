"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IncludedWithWafExclusionItem = _interopRequireDefault(require("./IncludedWithWafExclusionItem"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _WafExclusionResponseData = _interopRequireDefault(require("./WafExclusionResponseData"));

var _WafExclusionsResponseAllOf = _interopRequireDefault(require("./WafExclusionsResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafExclusionsResponse model module.
 * @module model/WafExclusionsResponse
 * @version 3.0.0-alpha1
 */
var WafExclusionsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafExclusionsResponse</code>.
   * @alias module:model/WafExclusionsResponse
   * @implements module:model/Pagination
   * @implements module:model/WafExclusionsResponseAllOf
   */
  function WafExclusionsResponse() {
    _classCallCheck(this, WafExclusionsResponse);

    _Pagination["default"].initialize(this);

    _WafExclusionsResponseAllOf["default"].initialize(this);

    WafExclusionsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafExclusionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafExclusionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionsResponse} obj Optional instance to populate.
     * @return {module:model/WafExclusionsResponse} The populated <code>WafExclusionsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafExclusionsResponse();

        _Pagination["default"].constructFromObject(data, obj);

        _WafExclusionsResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

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

  return WafExclusionsResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


WafExclusionsResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

WafExclusionsResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/WafExclusionResponseData>} data
 */

WafExclusionsResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafExclusionItem>} included
 */

WafExclusionsResponse.prototype['included'] = undefined; // Implement Pagination interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_Pagination["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_Pagination["default"].prototype['meta'] = undefined; // Implement WafExclusionsResponseAllOf interface:

/**
 * @member {Array.<module:model/WafExclusionResponseData>} data
 */

_WafExclusionsResponseAllOf["default"].prototype['data'] = undefined;
/**
 * @member {Array.<module:model/IncludedWithWafExclusionItem>} included
 */

_WafExclusionsResponseAllOf["default"].prototype['included'] = undefined;
var _default = WafExclusionsResponse;
exports["default"] = _default;