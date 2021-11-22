"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceAuthorizationDataAttributes = _interopRequireDefault(require("./ServiceAuthorizationDataAttributes"));

var _TypeServiceAuthorization = _interopRequireDefault(require("./TypeServiceAuthorization"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceAuthorizationData model module.
 * @module model/ServiceAuthorizationData
 * @version 3.0.0-alpha1
 */
var ServiceAuthorizationData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceAuthorizationData</code>.
   * @alias module:model/ServiceAuthorizationData
   */
  function ServiceAuthorizationData() {
    _classCallCheck(this, ServiceAuthorizationData);

    ServiceAuthorizationData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceAuthorizationData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceAuthorizationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAuthorizationData} obj Optional instance to populate.
     * @return {module:model/ServiceAuthorizationData} The populated <code>ServiceAuthorizationData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceAuthorizationData();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeServiceAuthorization["default"].constructFromObject(data['type']);
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ServiceAuthorizationDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _ApiClient["default"].convertToType(data['relationships'], Object);
        }
      }

      return obj;
    }
  }]);

  return ServiceAuthorizationData;
}();
/**
 * @member {module:model/TypeServiceAuthorization} type
 */


ServiceAuthorizationData.prototype['type'] = undefined;
/**
 * @member {module:model/ServiceAuthorizationDataAttributes} attributes
 */

ServiceAuthorizationData.prototype['attributes'] = undefined;
/**
 * @member {Object} relationships
 */

ServiceAuthorizationData.prototype['relationships'] = undefined;
var _default = ServiceAuthorizationData;
exports["default"] = _default;