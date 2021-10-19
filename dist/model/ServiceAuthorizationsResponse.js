"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _ServiceAuthorizationResponseData = _interopRequireDefault(require("./ServiceAuthorizationResponseData"));

var _ServiceAuthorizationsResponseAllOf = _interopRequireDefault(require("./ServiceAuthorizationsResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceAuthorizationsResponse model module.
 * @module model/ServiceAuthorizationsResponse
 * @version 3.0.0-alpha1
 */
var ServiceAuthorizationsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceAuthorizationsResponse</code>.
   * @alias module:model/ServiceAuthorizationsResponse
   */
  function ServiceAuthorizationsResponse() {
    _classCallCheck(this, ServiceAuthorizationsResponse);

    ServiceAuthorizationsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceAuthorizationsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceAuthorizationsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAuthorizationsResponse} obj Optional instance to populate.
     * @return {module:model/ServiceAuthorizationsResponse} The populated <code>ServiceAuthorizationsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceAuthorizationsResponse();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_ServiceAuthorizationResponseData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ServiceAuthorizationsResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


ServiceAuthorizationsResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

ServiceAuthorizationsResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/ServiceAuthorizationResponseData>} data
 */

ServiceAuthorizationsResponse.prototype['data'] = undefined;
var _default = ServiceAuthorizationsResponse;
exports["default"] = _default;