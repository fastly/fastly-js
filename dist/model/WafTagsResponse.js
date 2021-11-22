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

var _WafTag = _interopRequireDefault(require("./WafTag"));

var _WafTagsResponseAllOf = _interopRequireDefault(require("./WafTagsResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WafTagsResponse model module.
 * @module model/WafTagsResponse
 * @version 3.0.0-alpha1
 */
var WafTagsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WafTagsResponse</code>.
   * @alias module:model/WafTagsResponse
   * @implements module:model/Pagination
   * @implements module:model/WafTagsResponseAllOf
   */
  function WafTagsResponse() {
    _classCallCheck(this, WafTagsResponse);

    _Pagination["default"].initialize(this);

    _WafTagsResponseAllOf["default"].initialize(this);

    WafTagsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WafTagsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WafTagsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafTagsResponse} obj Optional instance to populate.
     * @return {module:model/WafTagsResponse} The populated <code>WafTagsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WafTagsResponse();

        _Pagination["default"].constructFromObject(data, obj);

        _WafTagsResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_WafTag["default"]]);
        }

        if (data.hasOwnProperty('included')) {
          obj['included'] = _ApiClient["default"].convertToType(data['included'], [_WafRule["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WafTagsResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


WafTagsResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

WafTagsResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/WafTag>} data
 */

WafTagsResponse.prototype['data'] = undefined;
/**
 * @member {Array.<module:model/WafRule>} included
 */

WafTagsResponse.prototype['included'] = undefined; // Implement Pagination interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_Pagination["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_Pagination["default"].prototype['meta'] = undefined; // Implement WafTagsResponseAllOf interface:

/**
 * @member {Array.<module:model/WafTag>} data
 */

_WafTagsResponseAllOf["default"].prototype['data'] = undefined;
/**
 * @member {Array.<module:model/WafRule>} included
 */

_WafTagsResponseAllOf["default"].prototype['included'] = undefined;
var _default = WafTagsResponse;
exports["default"] = _default;