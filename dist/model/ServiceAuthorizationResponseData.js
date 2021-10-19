"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceAuthorizationData = _interopRequireDefault(require("./ServiceAuthorizationData"));

var _ServiceAuthorizationResponseDataAllOf = _interopRequireDefault(require("./ServiceAuthorizationResponseDataAllOf"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

var _TypeServiceAuthorization = _interopRequireDefault(require("./TypeServiceAuthorization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceAuthorizationResponseData model module.
 * @module model/ServiceAuthorizationResponseData
 * @version 3.0.0-alpha1
 */
var ServiceAuthorizationResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceAuthorizationResponseData</code>.
   * @alias module:model/ServiceAuthorizationResponseData
   */
  function ServiceAuthorizationResponseData() {
    _classCallCheck(this, ServiceAuthorizationResponseData);

    ServiceAuthorizationResponseData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceAuthorizationResponseData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceAuthorizationResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAuthorizationResponseData} obj Optional instance to populate.
     * @return {module:model/ServiceAuthorizationResponseData} The populated <code>ServiceAuthorizationResponseData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceAuthorizationResponseData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _Timestamps["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _ApiClient["default"].convertToType(data['relationships'], Object);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeServiceAuthorization["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ServiceAuthorizationResponseData;
}();
/**
 * @member {module:model/Timestamps} attributes
 */


ServiceAuthorizationResponseData.prototype['attributes'] = undefined;
/**
 * @member {Object} relationships
 */

ServiceAuthorizationResponseData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeServiceAuthorization} type
 */

ServiceAuthorizationResponseData.prototype['type'] = undefined;
/**
 * Alphanumeric string identifying a service authorization.
 * @member {String} id
 */

ServiceAuthorizationResponseData.prototype['id'] = undefined;
var _default = ServiceAuthorizationResponseData;
exports["default"] = _default;