"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DirectorBackendAllOf = _interopRequireDefault(require("./DirectorBackendAllOf"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DirectorBackend model module.
 * @module model/DirectorBackend
 * @version 3.0.0-alpha1
 */
var DirectorBackend = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DirectorBackend</code>.
   * @alias module:model/DirectorBackend
   * @implements module:model/Timestamps
   * @implements module:model/ServiceIdAndVersion
   * @implements module:model/DirectorBackendAllOf
   */
  function DirectorBackend() {
    _classCallCheck(this, DirectorBackend);

    _Timestamps["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    _DirectorBackendAllOf["default"].initialize(this);

    DirectorBackend.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DirectorBackend, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DirectorBackend</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectorBackend} obj Optional instance to populate.
     * @return {module:model/DirectorBackend} The populated <code>DirectorBackend</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DirectorBackend();

        _Timestamps["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

        _DirectorBackendAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('backend_name')) {
          obj['backend_name'] = _ApiClient["default"].convertToType(data['backend_name'], 'String');
        }

        if (data.hasOwnProperty('director')) {
          obj['director'] = _ApiClient["default"].convertToType(data['director'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DirectorBackend;
}();
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */


DirectorBackend.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

DirectorBackend.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

DirectorBackend.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

DirectorBackend.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

DirectorBackend.prototype['version'] = undefined;
/**
 * The name of the backend.
 * @member {String} backend_name
 */

DirectorBackend.prototype['backend_name'] = undefined;
/**
 * Name for the Director.
 * @member {String} director
 */

DirectorBackend.prototype['director'] = undefined; // Implement Timestamps interface:

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

_Timestamps["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_Timestamps["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_Timestamps["default"].prototype['updated_at'] = undefined; // Implement ServiceIdAndVersion interface:

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

_ServiceIdAndVersion["default"].prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

_ServiceIdAndVersion["default"].prototype['version'] = undefined; // Implement DirectorBackendAllOf interface:

/**
 * The name of the backend.
 * @member {String} backend_name
 */

_DirectorBackendAllOf["default"].prototype['backend_name'] = undefined;
/**
 * Name for the Director.
 * @member {String} director
 */

_DirectorBackendAllOf["default"].prototype['director'] = undefined;
var _default = DirectorBackend;
exports["default"] = _default;