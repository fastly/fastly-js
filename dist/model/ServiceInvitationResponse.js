"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceInvitation = _interopRequireDefault(require("./ServiceInvitation"));

var _ServiceInvitationResponseAllOf = _interopRequireDefault(require("./ServiceInvitationResponseAllOf"));

var _ServiceInvitationResponseAllOfData = _interopRequireDefault(require("./ServiceInvitationResponseAllOfData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceInvitationResponse model module.
 * @module model/ServiceInvitationResponse
 * @version 3.0.0-alpha1
 */
var ServiceInvitationResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceInvitationResponse</code>.
   * @alias module:model/ServiceInvitationResponse
   */
  function ServiceInvitationResponse() {
    _classCallCheck(this, ServiceInvitationResponse);

    ServiceInvitationResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceInvitationResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceInvitationResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceInvitationResponse} obj Optional instance to populate.
     * @return {module:model/ServiceInvitationResponse} The populated <code>ServiceInvitationResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceInvitationResponse();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ServiceInvitationResponseAllOfData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return ServiceInvitationResponse;
}();
/**
 * @member {module:model/ServiceInvitationResponseAllOfData} data
 */


ServiceInvitationResponse.prototype['data'] = undefined;
var _default = ServiceInvitationResponse;
exports["default"] = _default;