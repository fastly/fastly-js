"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ResponseObject model module.
 * @module model/ResponseObject
 * @version 3.0.0-alpha1
 */
var ResponseObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResponseObject</code>.
   * @alias module:model/ResponseObject
   */
  function ResponseObject() {
    _classCallCheck(this, ResponseObject);

    ResponseObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponseObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ResponseObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseObject} obj Optional instance to populate.
     * @return {module:model/ResponseObject} The populated <code>ResponseObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponseObject();

        if (data.hasOwnProperty('cache_condition')) {
          obj['cache_condition'] = _ApiClient["default"].convertToType(data['cache_condition'], 'String');
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('request_condition')) {
          obj['request_condition'] = _ApiClient["default"].convertToType(data['request_condition'], 'String');
        }

        if (data.hasOwnProperty('response')) {
          obj['response'] = _ApiClient["default"].convertToType(data['response'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ResponseObject;
}();
/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */


ResponseObject.prototype['cache_condition'] = undefined;
/**
 * The content to deliver for the response object, can be empty.
 * @member {String} content
 */

ResponseObject.prototype['content'] = undefined;
/**
 * The MIME type of the content, can be empty.
 * @member {String} content_type
 */

ResponseObject.prototype['content_type'] = undefined;
/**
 * Name for the request settings.
 * @member {String} name
 */

ResponseObject.prototype['name'] = undefined;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

ResponseObject.prototype['request_condition'] = undefined;
/**
 * The HTTP response.
 * @member {String} response
 * @default 'Ok'
 */

ResponseObject.prototype['response'] = 'Ok';
/**
 * The HTTP status code.
 * @member {Number} status
 * @default 200
 */

ResponseObject.prototype['status'] = 200;
var _default = ResponseObject;
exports["default"] = _default;