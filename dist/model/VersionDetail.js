"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SchemasDirector = _interopRequireDefault(require("./SchemasDirector"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Settings = _interopRequireDefault(require("./Settings"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VersionDetail model module.
 * @module model/VersionDetail
 * @version 3.0.0-alpha1
 */
var VersionDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VersionDetail</code>.
   * @alias module:model/VersionDetail
   */
  function VersionDetail() {
    _classCallCheck(this, VersionDetail);

    VersionDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VersionDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VersionDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VersionDetail} obj Optional instance to populate.
     * @return {module:model/VersionDetail} The populated <code>VersionDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VersionDetail();

        if (data.hasOwnProperty('backends')) {
          obj['backends'] = _ApiClient["default"].convertToType(data['backends'], [_ServiceIdAndVersion["default"]]);
        }

        if (data.hasOwnProperty('cache_settings')) {
          obj['cache_settings'] = _ApiClient["default"].convertToType(data['cache_settings'], [_Timestamps["default"]]);
        }

        if (data.hasOwnProperty('conditions')) {
          obj['conditions'] = _ApiClient["default"].convertToType(data['conditions'], [_Timestamps["default"]]);
        }

        if (data.hasOwnProperty('directors')) {
          obj['directors'] = _ApiClient["default"].convertToType(data['directors'], [_SchemasDirector["default"]]);
        }

        if (data.hasOwnProperty('domains')) {
          obj['domains'] = _ApiClient["default"].convertToType(data['domains'], [_Timestamps["default"]]);
        }

        if (data.hasOwnProperty('gzips')) {
          obj['gzips'] = _ApiClient["default"].convertToType(data['gzips'], [_Timestamps["default"]]);
        }

        if (data.hasOwnProperty('headers')) {
          obj['headers'] = _ApiClient["default"].convertToType(data['headers'], [_Timestamps["default"]]);
        }

        if (data.hasOwnProperty('healthchecks')) {
          obj['healthchecks'] = _ApiClient["default"].convertToType(data['healthchecks'], [_Timestamps["default"]]);
        }

        if (data.hasOwnProperty('request_settings')) {
          obj['request_settings'] = _ApiClient["default"].convertToType(data['request_settings'], [_Timestamps["default"]]);
        }

        if (data.hasOwnProperty('response_objects')) {
          obj['response_objects'] = _ApiClient["default"].convertToType(data['response_objects'], [_Timestamps["default"]]);
        }

        if (data.hasOwnProperty('settings')) {
          obj['settings'] = _Settings["default"].constructFromObject(data['settings']);
        }

        if (data.hasOwnProperty('snippets')) {
          obj['snippets'] = _ApiClient["default"].convertToType(data['snippets'], [_Timestamps["default"]]);
        }

        if (data.hasOwnProperty('vcls')) {
          obj['vcls'] = _ApiClient["default"].convertToType(data['vcls'], [_Timestamps["default"]]);
        }

        if (data.hasOwnProperty('wordpress')) {
          obj['wordpress'] = _ApiClient["default"].convertToType(data['wordpress'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return VersionDetail;
}();
/**
 * List of backends associated to this service.
 * @member {Array.<module:model/ServiceIdAndVersion>} backends
 */


VersionDetail.prototype['backends'] = undefined;
/**
 * List of cache settings associated to this service.
 * @member {Array.<module:model/Timestamps>} cache_settings
 */

VersionDetail.prototype['cache_settings'] = undefined;
/**
 * List of conditions associated to this service.
 * @member {Array.<module:model/Timestamps>} conditions
 */

VersionDetail.prototype['conditions'] = undefined;
/**
 * List of directors associated to this service.
 * @member {Array.<module:model/SchemasDirector>} directors
 */

VersionDetail.prototype['directors'] = undefined;
/**
 * List of domains associated to this service.
 * @member {Array.<module:model/Timestamps>} domains
 */

VersionDetail.prototype['domains'] = undefined;
/**
 * List of gzip rules associated to this service.
 * @member {Array.<module:model/Timestamps>} gzips
 */

VersionDetail.prototype['gzips'] = undefined;
/**
 * List of headers associated to this service.
 * @member {Array.<module:model/Timestamps>} headers
 */

VersionDetail.prototype['headers'] = undefined;
/**
 * List of healthchecks associated to this service.
 * @member {Array.<module:model/Timestamps>} healthchecks
 */

VersionDetail.prototype['healthchecks'] = undefined;
/**
 * List of request settings for this service.
 * @member {Array.<module:model/Timestamps>} request_settings
 */

VersionDetail.prototype['request_settings'] = undefined;
/**
 * List of response objects for this service.
 * @member {Array.<module:model/Timestamps>} response_objects
 */

VersionDetail.prototype['response_objects'] = undefined;
/**
 * @member {module:model/Settings} settings
 */

VersionDetail.prototype['settings'] = undefined;
/**
 * List of VCL snippets for this service.
 * @member {Array.<module:model/Timestamps>} snippets
 */

VersionDetail.prototype['snippets'] = undefined;
/**
 * List of VCL files for this service.
 * @member {Array.<module:model/Timestamps>} vcls
 */

VersionDetail.prototype['vcls'] = undefined;
/**
 * A list of Wordpress rules with this service.
 * @member {Array.<Object>} wordpress
 */

VersionDetail.prototype['wordpress'] = undefined;
var _default = VersionDetail;
exports["default"] = _default;