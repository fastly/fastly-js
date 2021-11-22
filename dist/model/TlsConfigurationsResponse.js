"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _TlsConfigurationResponseData = _interopRequireDefault(require("./TlsConfigurationResponseData"));

var _TlsConfigurationsResponseAllOf = _interopRequireDefault(require("./TlsConfigurationsResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsConfigurationsResponse model module.
 * @module model/TlsConfigurationsResponse
 * @version 3.0.0-alpha1
 */
var TlsConfigurationsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsConfigurationsResponse</code>.
   * @alias module:model/TlsConfigurationsResponse
   * @implements module:model/Pagination
   * @implements module:model/TlsConfigurationsResponseAllOf
   */
  function TlsConfigurationsResponse() {
    _classCallCheck(this, TlsConfigurationsResponse);

    _Pagination["default"].initialize(this);

    _TlsConfigurationsResponseAllOf["default"].initialize(this);

    TlsConfigurationsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsConfigurationsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsConfigurationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsConfigurationsResponse} obj Optional instance to populate.
     * @return {module:model/TlsConfigurationsResponse} The populated <code>TlsConfigurationsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsConfigurationsResponse();

        _Pagination["default"].constructFromObject(data, obj);

        _TlsConfigurationsResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_TlsConfigurationResponseData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TlsConfigurationsResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


TlsConfigurationsResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

TlsConfigurationsResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/TlsConfigurationResponseData>} data
 */

TlsConfigurationsResponse.prototype['data'] = undefined; // Implement Pagination interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_Pagination["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_Pagination["default"].prototype['meta'] = undefined; // Implement TlsConfigurationsResponseAllOf interface:

/**
 * @member {Array.<module:model/TlsConfigurationResponseData>} data
 */

_TlsConfigurationsResponseAllOf["default"].prototype['data'] = undefined;
var _default = TlsConfigurationsResponse;
exports["default"] = _default;