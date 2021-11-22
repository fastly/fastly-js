"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _TlsSubscriptionResponse = _interopRequireDefault(require("./TlsSubscriptionResponse"));

var _TlsSubscriptionsResponseAllOf = _interopRequireDefault(require("./TlsSubscriptionsResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsSubscriptionsResponse model module.
 * @module model/TlsSubscriptionsResponse
 * @version 3.0.0-alpha1
 */
var TlsSubscriptionsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsSubscriptionsResponse</code>.
   * @alias module:model/TlsSubscriptionsResponse
   * @implements module:model/Pagination
   * @implements module:model/TlsSubscriptionsResponseAllOf
   */
  function TlsSubscriptionsResponse() {
    _classCallCheck(this, TlsSubscriptionsResponse);

    _Pagination["default"].initialize(this);

    _TlsSubscriptionsResponseAllOf["default"].initialize(this);

    TlsSubscriptionsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsSubscriptionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsSubscriptionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsSubscriptionsResponse} obj Optional instance to populate.
     * @return {module:model/TlsSubscriptionsResponse} The populated <code>TlsSubscriptionsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsSubscriptionsResponse();

        _Pagination["default"].constructFromObject(data, obj);

        _TlsSubscriptionsResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_TlsSubscriptionResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TlsSubscriptionsResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


TlsSubscriptionsResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

TlsSubscriptionsResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/TlsSubscriptionResponse>} data
 */

TlsSubscriptionsResponse.prototype['data'] = undefined; // Implement Pagination interface:

/**
 * @member {module:model/PaginationLinks} links
 */

_Pagination["default"].prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

_Pagination["default"].prototype['meta'] = undefined; // Implement TlsSubscriptionsResponseAllOf interface:

/**
 * @member {Array.<module:model/TlsSubscriptionResponse>} data
 */

_TlsSubscriptionsResponseAllOf["default"].prototype['data'] = undefined;
var _default = TlsSubscriptionsResponse;
exports["default"] = _default;