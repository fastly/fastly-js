"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasVersionResponse = _interopRequireDefault(require("./SchemasVersionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceResponseAllOf model module.
 * @module model/ServiceResponseAllOf
 * @version 3.0.0-alpha1
 */
var ServiceResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceResponseAllOf</code>.
   * @alias module:model/ServiceResponseAllOf
   */
  function ServiceResponseAllOf() {
    _classCallCheck(this, ServiceResponseAllOf);

    ServiceResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceResponseAllOf} The populated <code>ServiceResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceResponseAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('paused')) {
          obj['paused'] = _ApiClient["default"].convertToType(data['paused'], 'Boolean');
        }

        if (data.hasOwnProperty('publish_key')) {
          obj['publish_key'] = _ApiClient["default"].convertToType(data['publish_key'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('versions')) {
          obj['versions'] = _ApiClient["default"].convertToType(data['versions'], [_SchemasVersionResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ServiceResponseAllOf;
}();
/**
 * Alphanumeric string identifying the service.
 * @member {String} id
 */


ServiceResponseAllOf.prototype['id'] = undefined;
/**
 * Whether the service is paused. Services are paused due to a lack of traffic for an extended period of time. Services are resumed either when a draft version is activated or a locked version is cloned and reactivated.
 * @member {Boolean} paused
 */

ServiceResponseAllOf.prototype['paused'] = undefined;
/**
 * Unused at this time.
 * @member {String} publish_key
 */

ServiceResponseAllOf.prototype['publish_key'] = undefined;
/**
 * Current [version](/reference/api/services/version/) of the service.
 * @member {Number} version
 */

ServiceResponseAllOf.prototype['version'] = undefined;
/**
 * A list of [versions](/reference/api/services/version/) associated with the service.
 * @member {Array.<module:model/SchemasVersionResponse>} versions
 */

ServiceResponseAllOf.prototype['versions'] = undefined;
var _default = ServiceResponseAllOf;
exports["default"] = _default;